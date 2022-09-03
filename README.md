# ng-packagr global typing error

This repository includes simple case where library modifies global `window` object by adding own `customProperty` variable to it. Doing this in regular Angular application doesn't raise errors with compilation but doing the same thing with ng-packagr causes compilation to fail.


## Error reproduction

Install required dependencies with: `yarn install`

Try to build the library with `yarn build`. Compilation should exit with the following error:

```
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'ng-packagr-global-typing-error'
------------------------------------------------------------------------------
✖ Compiling with Angular sources in Ivy partial compilation mode.
src/lib.ts:7:19 - error TS2339: Property 'customProperty' does not exist on type 'Window & typeof globalThis'.

7     return window.customProperty;
                    ~~~~~~~~~~~~~~
src/lib.ts:11:12 - error TS2339: Property 'customProperty' does not exist on type 'Window & typeof globalThis'.

11     window.customProperty = value;
              ~~~~~~~~~~~~~~

error Command failed with exit code 1.
```
