import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';

function Header() {
  return (
    <SemanticHeader as="header" block>
      <SemanticHeader.Content>
        Header Content
      </SemanticHeader.Content>
    </SemanticHeader>
  );
}

export default Header;
