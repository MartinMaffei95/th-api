"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, errorRaw) => {
    console.log(errorRaw);
    switch (error) {
        case 'TOKEN_EMPTY':
            res.status(400);
            res.send({ error });
            break;
        case 'INVALID_SESSION':
            res.status(401);
            res.send({ error });
            break;
        case 'USER_NOT_EXIST':
            res.status(401);
            res.send({ error });
            break;
        case 'YOU_DONT_HAVE_PERMISSIONS':
            res.status(403);
            res.send({ error });
            break;
        case 'ACCOUNT_NOT_FOUND':
            res.status(404);
            res.send({ error });
            break;
        default:
            res.status(500);
            res.send({ error });
            break;
    }
};
exports.handleHttp = handleHttp;
