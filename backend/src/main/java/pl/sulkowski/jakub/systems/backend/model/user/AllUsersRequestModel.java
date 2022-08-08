package pl.sulkowski.jakub.systems.backend.model.user;

import org.springframework.data.domain.Sort;

public class AllUsersRequestModel {
    private long offset;
    private long limit;

    private Sort.Direction direction;

    private String sortFieldName;

    public AllUsersRequestModel(long offset, long limit, Sort.Direction direction, String sortFieldName) {
        this.offset = offset;
        this.limit = limit;
        this.direction = direction;
        this.sortFieldName = sortFieldName;
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

    public void setDirection(Sort.Direction direction){
        this.direction = direction;
    }

    public Sort.Direction getDirection(){
        return this.direction;
    }

    public String getSortFieldName() {
        return sortFieldName;
    }

    public void setSortFieldName(String sortFieldName) {
        this.sortFieldName = sortFieldName;
    }
}
