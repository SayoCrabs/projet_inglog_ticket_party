import {State} from "@ngxs/store";
import {Injectable} from "@angular/core";

export interface ProUserConnectionStateModel
{

}

export const proUserConnectionInitialState = {
  //...GenericState.init()
};

@State({
  name: 'proUserConnectionInitialState',
  defaults: proUserConnectionInitialState
})

@Injectable()
export class ConnectionState
{
  /*@Selector()
  static discussions(state: DiscussionsStateModel): Discussion[]
  {
    return state.discussions;
  }*/
}
