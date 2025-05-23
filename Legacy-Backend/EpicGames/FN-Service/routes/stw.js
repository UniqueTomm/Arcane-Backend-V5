async function stw(fastify, options) {
    fastify.get('/fortnite/api/game/v2/homebase/allowed-name-chars', (request, reply) => {
        reply.status(200).send({
            "ranges": [
                48, 57, 65, 90, 97, 122, 192, 255, 260, 265, 280, 281, 286, 287, 304, 305,
                321, 324, 346, 347, 350, 351, 377, 380, 1024, 1279, 1536, 1791, 4352, 4607,
                11904, 12031, 12288, 12351, 12352, 12543, 12592, 12687, 12800, 13055, 13056,
                13311, 13312, 19903, 19968, 40959, 43360, 43391, 44032, 55215, 55216, 55295,
                63744, 64255, 65072, 65103, 65281, 65470, 131072, 173791, 194560, 195103
            ],
            "singlePoints": [32, 39, 45, 46, 95, 126],
            "excludedPoints": [208, 215, 222, 247]
        })
    })

    fastify.get('/fortnite/api/game/v2/friendcodes/:accountId/:codeType', (request, reply) => {
        reply.status(200).send([])
    })

    fastify.get('/fortnite/api/game/v2/world/info', (request, reply) => {
        reply.status(200).send(require("../responses/stw/worldinfo.json"))
    })

    fastify.post('/fortnite/api/game/v2/world/validate', (request, reply) => {
        reply.status(200).send(require("../responses/stw/worldinfo.json"))
    })
}

module.exports = stw;