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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntity = void 0;
const base_entity_1 = require("./base/base.entity");
const typeorm_1 = require("typeorm");
let CommentEntity = class CommentEntity extends base_entity_1.BaseEntityAutoId {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'content', length: 5000 }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'post_id' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_deleted' }),
    __metadata("design:type", Boolean)
], CommentEntity.prototype, "isDeleted", void 0);
CommentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'comment' })
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map