import { State } from '@ngxs/store';

export class GenericStateModel
{
  loaded: boolean | undefined;
  loading: boolean | undefined;
  error: any;
}

import { Injectable } from '@angular/core';

@State({
  name: 'generic',
  defaults: GenericState.init()})
@Injectable()
export class GenericState
{
  static init(): GenericStateModel
  {
    return {loaded: false, loading: false, error: null};
  }

  static load(): GenericStateModel
  {
    return {loaded: false, loading: true, error: null};
  }

  static success(): GenericStateModel
  {
    return {loading: false, loaded: true, error: null};
  }

  static error(error: any): GenericStateModel
  {
    return {loaded: false, loading: false, error};
  }

  /**
   * SELECTORS


  static loadedSelector<T extends GenericStateModel>(stateClass)
  {
    // If the selector is created then returned directly, an error occurs while "ng build".......
    // @see https://github.com/ng-packagr/ng-packagr/issues/696#issuecomment-387114613
    const result = createSelector([stateClass], (state: T) =>
    {
      return state.loaded;
    });
    return result;
  }

  static loadingSelector<T extends GenericStateModel>(stateClass)
  {
    // If the selector is created then returned directly, an error occurs while "ng build".......
    // @see https://github.com/ng-packagr/ng-packagr/issues/696#issuecomment-387114613
    const result = createSelector([stateClass], (state: T) =>
    {
      return state.loading;
    });
    return result;
  }

  static errorSelector<T extends GenericStateModel>(stateClass)
  {
    // If the selector is created then returned directly, an error occurs while "ng build".......
    // @see https://github.com/ng-packagr/ng-packagr/issues/696#issuecomment-387114613
    const result = createSelector([stateClass], (state: T) =>
    {
      return state.error;
    });

    return result;
  }*/
}
