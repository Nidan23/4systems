package pl.sulkowski.jakub.systems.backend.model.user;

public class UserListRequestModel {
    private long offset;
    private long limit;

    public UserListRequestModel(long offset, long limit) {
        this.offset = offset;
        this.limit = limit;
    }

    public long getOffset() {
        return offset;
    }

    public void setOffset(long offset) {
        this.offset = offset;
    }

    public long getLimit() {
        return limit;
    }

    public void setLimit(long limit) {
        this.limit = limit;
    }
}
