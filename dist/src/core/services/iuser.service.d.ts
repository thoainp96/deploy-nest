import { CreateUserRequest } from "../dtos/requests/user/create-user.request";
import { LoginRequest } from "../dtos/requests/user/login.request";
import { UpdateUserLanguageRequest } from "../dtos/requests/user/update-user-language.request";
import { ResponseDto } from "../dtos/responses/response.dto";
import { IBaseService } from "./ibase.service";
export interface IUserService extends IBaseService {
    createUser(request: CreateUserRequest): Promise<ResponseDto>;
    login(request: LoginRequest): Promise<any>;
    getUserByUsername(username: string): Promise<ResponseDto>;
    updateUserLanguage(request: UpdateUserLanguageRequest): Promise<any>;
}
