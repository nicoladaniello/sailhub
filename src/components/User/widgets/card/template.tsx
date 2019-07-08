import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Media, CardHeader } from "reactstrap";

export interface UserCardWidgetTemplateProps {
  title: string;
  user: any;
}

const UserCardWidgetTemplate: React.SFC<UserCardWidgetTemplateProps> = ({
  user,
  title
}) => {
  const { name, nicename, registeredDate, avatar } = user;
  const hasAvatar = avatar && avatar.foundAvatar && !avatar.isRestricted;

  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Media>
          {hasAvatar && (
            <Media
              className="mr-4"
              left
              tag={Link}
              to={`/wordpress/users/${nicename}`}
            >
              <Media object src={avatar.url} alt={name} />
            </Media>
          )}
          <Media body>
            <Media heading>{name}</Media>
            <small>
              User since: {new Date(registeredDate).toLocaleDateString()}
            </small>
          </Media>
        </Media>
      </CardBody>
    </Card>
  );
};

export default UserCardWidgetTemplate;
