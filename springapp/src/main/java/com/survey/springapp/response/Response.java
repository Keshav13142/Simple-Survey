package com.survey.springapp.response;

import javax.persistence.*;

@Entity(name = "Response")
@Table(name = "response")
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long responseId;
    private String name;
    private String email;
    private String answer;

    public Response() {
    }

    public Response(String name, String email, String answer) {
        this.name = name;
        this.email = email;
        this.answer = answer;
    }

    public Long getResponseId() {
        return responseId;
    }

    public void setResponseId(Long responseId) {
        this.responseId = responseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Response(Long responseId, String name, String email, String answer) {
        this.responseId = responseId;
        this.name = name;
        this.email = email;
        this.answer = answer;
    }

    @Override
    public String toString() {
        return "Response{" +
                "responseId=" + responseId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", answer='" + answer + '\'' +
                '}';
    }
}
