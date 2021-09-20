import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userData={tweet.user.name}/>

          <Timestamp time={tweet.timestamp}/>
        </div>

        <p className="message">
          <Message message={tweet.message}/>
        </p>

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
