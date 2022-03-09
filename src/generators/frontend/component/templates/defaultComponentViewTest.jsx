import React from "react";
import {} from "enzyme";
<%if (css === "yes") { %>
import useStyles from "./<%=title%>View.styles";
jest.mock("./<%=title%>ViewStyle");
<% } %>

describe("<%=title%>", () => {
  <%if (css === "yes") { %>
  beforeEach(() => {
    useStyles.mockReturnValue({});
  });
  <% } %>
  it("should...", () => {});
});
