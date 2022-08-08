package pl.sulkowski.jakub.systems.backend.model.user;

public class UserListRequestModel {
    private String offset;
    private String limit;

    public UserListRequestModel(String offset, String limit) {
        this.offset = offset;
        this.limit = limit;
    }

    public String getOffset() {
        return offset;
    }

    public void setOffset(String offset) {
        this.offset = offset;
    }

    public String getLimit() {
        return limit;
    }

    public void setLimit(String limit) {
        this.limit = limit;
    }
}
