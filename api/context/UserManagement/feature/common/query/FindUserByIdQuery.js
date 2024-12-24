function FindUserByIdQuery(id) {
    this.id = id;
    return this;
}

export default FindUserByIdQuery;

FindUserByIdQuery.prototype.getId = function() { return this.id; };