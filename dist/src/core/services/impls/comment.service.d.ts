import { ResponseDto } from "../../dtos/responses/response.dto";
import { BaseService } from "./base.service";
import { IPostRepository } from "../../repositories/ipost.repository";
import { ICommentRepository } from "../../repositories/icomment.repository";
import { ICommentService } from "../icomment.service";
import { CreateCommentRequest } from "../../dtos/requests/comment/create-comment.request";
import { UpdateCommentRequest } from "../../dtos/requests/comment/update-comment.request";
import { GetCommentListByPostIdRequest } from "../../dtos/requests/comment/get-comment-list-by-post-id.request";
export declare class CommentService extends BaseService implements ICommentService {
    private _commentRepos;
    private _postRepos;
    private readonly _logger;
    private _commonUtil;
    constructor(_commentRepos: ICommentRepository, _postRepos: IPostRepository);
    createComment(request: CreateCommentRequest): Promise<ResponseDto>;
    updateComment(id: number, request: UpdateCommentRequest): Promise<ResponseDto>;
    getCommentById(id: number): Promise<ResponseDto>;
    deleteCommentById(id: number): Promise<ResponseDto>;
    getCommentListByPostId(request: GetCommentListByPostIdRequest): Promise<ResponseDto>;
}
