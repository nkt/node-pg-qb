var QueryBuilder = require('./query-builder');

function PostgresQueryBuilder(conn) {
    this.conn = conn;
}

PostgresQueryBuilder.prototype.insert = function () {
    var qb = new QueryBuilder(this.conn);
    qb.prototype.call()
};

module.exports = PostgresQueryBuilder;
