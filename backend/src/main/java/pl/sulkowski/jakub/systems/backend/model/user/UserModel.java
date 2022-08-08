package pl.sulkowski.jakub.systems.backend.model.user;

public class UserModel {

    private String name;
    private String surname;
    private String login;

    public UserModel(String name, String surname, String login) {
        this.name = name.trim();
        this.surname = surname.trim();
        this.login = login.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
