class AnomalyDTO {
  constructor({
    id,
    name,
    type,
    walkthrough,
    artifacts,
    gallery,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.walkthrough = walkthrough;
    this.artifacts = artifacts || [];
    this.gallery = gallery || [];
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = AnomalyDTO;
