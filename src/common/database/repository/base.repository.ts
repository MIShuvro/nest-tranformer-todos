import { Document, FilterQuery, Model } from 'mongoose';


export abstract class BaseRepository<T extends Document> {
    constructor(protected readonly entityModel: Model<T>) {}

     async create(createDataEntity: any): Promise<T>{
        return new this.entityModel(createDataEntity).save()
     }

     async find(entityFilterQuery: FilterQuery<T>, projection?: Partial<T | any>, sort?: Partial<T | any>): Promise<T[] | null>{

        if(projection && sort){
            return this.entityModel.find(entityFilterQuery,projection).sort(sort).lean()
        }

        if(projection){
            return this.entityModel.find(entityFilterQuery, projection).lean()
        }

        if(sort){
            return this.entityModel.find(entityFilterQuery).sort(sort).lean()
        }

        return this.entityModel.find(entityFilterQuery).lean()
     }
}
