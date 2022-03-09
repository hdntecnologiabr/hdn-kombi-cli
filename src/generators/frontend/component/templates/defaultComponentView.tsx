import React from "react";
<%if (css === "yes") { %>
import useStyles from './<%=title%>View.styles';
<% } %>

interface Props {}

function <%=title%>View(props: Props) {
  return <div><%=title%></div>;
}

export default <%=title%>View;
