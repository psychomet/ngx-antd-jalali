/* eslint-disable no-invalid-this */

import { NzSafeAny } from 'ng-zorro-antd/core/types';

const isDefined = function (value?: NzSafeAny): boolean {
  return value !== undefined;
};

/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// eslint-disable-next-line
export function WithConfig<T>() {
  return function ConfigDecorator(
    target: NzSafeAny,
    propName: NzSafeAny,
    originalDescriptor?: TypedPropertyDescriptor<T>
  ): NzSafeAny {
    const privatePropName = `$$__zorroConfigDecorator__${propName}`;

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true,
      enumerable: false
    });

    return {
      get(): T | undefined {
        const originalValue = originalDescriptor?.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
        const assignedByUser = (this.propertyAssignCounter?.[propName] || 0) > 1;
        const configValue = this.nzConfigService.getConfigForComponent(this._nzModuleName)?.[propName];
        if (assignedByUser && isDefined(originalValue)) {
          return originalValue;
        } else {
          return isDefined(configValue) ? configValue : originalValue;
        }
      },
      set(value?: T): void {
        // If the value is assigned, we consider the newly assigned value as 'assigned by user'.
        this.propertyAssignCounter = this.propertyAssignCounter || {};
        this.propertyAssignCounter[propName] = (this.propertyAssignCounter[propName] || 0) + 1;

        if (originalDescriptor?.set) {
          originalDescriptor.set.bind(this)(value!);
        } else {
          this[privatePropName] = value;
        }
      },
      configurable: true,
      enumerable: true
    };
  };
}
