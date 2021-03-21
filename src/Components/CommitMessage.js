import PropTypes from 'prop-types';

const CommitMessage = ({commit}) => (
    <div className="commit-message">
         {commit.message}
    </div>
  )

  CommitMessage.propTypes = {
    commit:PropTypes.object.isRequired
  }

  export default CommitMessage;