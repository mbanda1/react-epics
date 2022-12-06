import React from 'react';
import * as PropTypes from 'prop-types'
const { Message } = require("semantic-ui-react")

const Msg = ({head}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
        setVisible(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

    return (
        visible && <Message positive>
            {head} Successfuly.
        </Message>
    )
}

Msg.defaultProps = {
    head: null
}

Msg.propTypes = {
    head: PropTypes.string.isRequired
}

export default Msg