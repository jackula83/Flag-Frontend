import { injectable, inject } from "inversify";
import { EntityModel, EntityService, Flag, HttpService, Nullable } from '../../common/types';
import { COMPONENT } from "../../common/component";

@injectable()
export class FlagService implements EntityService {
  private http: HttpService;

  public constructor(
    @inject(COMPONENT.HttpService) httpService: HttpService) {
    this.http = httpService;
  }

  public async enumerate(): Promise<Flag[]> {
    const results = await this.http.enumerate<EntityModel<Flag>>();
    return results?.Items;
  }

  public async get(id: number): Promise<Nullable<Flag>> {
    const results = await this.http.get<EntityModel<Flag>>(id);
    return results?.Item;
  }
}