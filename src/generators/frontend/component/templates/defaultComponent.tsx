import React from "react";
<%if (type !== "page") { %>
  import <%=title%>View from "./<%=title%>View";
<% } %>

interface Props {}

function <%=title%>(props: Props) {
  <%if (type !== "page") { %>
    return <<%=title%>View />;
  <% } else {%>
    return <div><%=title%></div>;
  <% } %>
}

export default <%=title%>;
