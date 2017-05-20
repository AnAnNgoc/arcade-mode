

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import UserData from '../models/UserData';


export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.expandChallengeView = this.expandChallengeView.bind(this);
    this.expandSessionView = this.expandSessionView.bind(this);
  }

  expandChallengeView(sessionId, challengeId) {
    console.log(`expandChallengeView ${sessionId} ${challengeId}`);
  }

  expandSessionView(sessionId) {
    console.log(`expandSessionView ${sessionId}`);
  }

  // TODO: Refactor into own component ProfileChallenge to avoid bind
  renderChallenges(sessionId, challenges) {
    const challengesJsx = challenges.map(challenge => {
      return (
        <ListGroupItem
          key={challenge.id}
          onClick={this.expandChallengeView.bind(this, sessionId, challenge.id)}
        >
          Challenge {challenge.id}
        </ListGroupItem>
      );
    });
    return challengesJsx;
  }

  renderSessions() {
    const sessions = this.props.userData.sessions.map(session => {
      const sessionId = session.get('id');
      const challenges = this.renderChallenges(sessionId, session.get('challenges'));
      // TODO: Refactor into own component ProfileSession to avoid bind
      return (
        <ListGroupItem
          key={sessionId}
        >
          Session: {sessionId}
          <button onClick={this.expandSessionView.bind(this, sessionId)}>Expand</button>
          <ListGroup>
            {challenges}
          </ListGroup>
        </ListGroupItem>
      );
    });
    return sessions;
  }

  render() {
    const sessions = this.renderSessions();
    return (
      <div className='user-profile'>
        <h1>User Profile</h1>
        <p>You can view your past sessions here. By clicking on a session, you can expand it
          to view all challenges completed during that session.
        </p>
        <div className='profile-data'>
          <ListGroup>
            {sessions}
          </ListGroup>
        </div>
      </div>
    );
  }

}

UserProfile.propTypes = {
  userData: PropTypes.instanceOf(UserData).isRequired
};
