package pl.sulkowski.jakub.systems.backend.model.user;

public class FindUserRequestModel {
    private String searchValue;

    public FindUserRequestModel(String searchValue) {
        this.searchValue = searchValue;
    }

    public FindUserRequestModel(){}

    public String getSearchValue() {
        return searchValue;
    }

    public void setSearchValue(String searchValue) {
        this.searchValue = searchValue;
    }
}
