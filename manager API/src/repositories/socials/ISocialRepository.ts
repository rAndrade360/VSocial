import Social from "../../entities/Social";

export default interface ISocialRepository {
    getAll(): Promise<Array<Social>>
}