"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CommonService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const common_1 = require("@nestjs/common");
const common_constant_1 = require("../../common/constants/common.constant");
const error_map_1 = require("../../common/error.map");
const module_config_1 = require("../../config/module.config");
const response_dto_1 = require("../../dtos/responses/response.dto");
const base_service_1 = require("./base.service");
let CommonService = CommonService_1 = class CommonService extends base_service_1.BaseService {
    constructor(_profileRepos, _postRepos, _photoRepos) {
        super(_profileRepos);
        this._profileRepos = _profileRepos;
        this._postRepos = _postRepos;
        this._photoRepos = _photoRepos;
        this._logger = new common_1.Logger(CommonService_1.name);
        this._logger.log("============== Constructor CommonService ==============");
    }
    async searchAll(request) {
        this._logger.log("============== Search all ==============");
        const res = new response_dto_1.ResponseDto();
        try {
            const result = {};
            const profileList = await this._profileRepos.searchProfile(request);
            const postList = await this._postRepos.searchPost(request);
            for (let i = 0; i < postList.length; i++) {
                const photoList = await this._photoRepos.findByCondition({ postId: postList[i].id, isDeleted: false }, { createdAt: common_constant_1.ORDER_BY.DESC });
                postList[i].photoList = photoList;
            }
            result['profileList'] = profileList;
            result['postList'] = postList;
            return res.return(error_map_1.ErrorMap.SUCCESSFUL.Code, result);
        }
        catch (error) {
            this._logger.error(`${error_map_1.ErrorMap.E500.Code}: ${error_map_1.ErrorMap.E500.Message}`);
            this._logger.error(`${error.name}: ${error.message}`);
            this._logger.error(`${error.stack}`);
            return res.return(error_map_1.ErrorMap.E500.Code);
        }
    }
};
CommonService = CommonService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPROFILE_REPOSITORY)),
    __param(1, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPOST_REPOSITORY)),
    __param(2, (0, common_1.Inject)(module_config_1.REPOSITORY_INTERFACE.IPHOTO_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map