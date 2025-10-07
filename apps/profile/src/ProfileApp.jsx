import { useState } from 'react';
import { Card, Button, Badge } from '@microfrontend-app/shared-ui';

function ProfileApp() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '👤',
    memberSince: '2024',
    orders: 15,
    totalSpent: 3499,
    status: 'premium'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleSave = () => {
    setUser({ ...user, name: editedName, email: editedEmail });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(user.name);
    setEditedEmail(user.email);
    setIsEditing(false);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>User Profile</h2>
        <p style={{ color: '#666', marginTop: '8px' }}>
          This is a microfrontend running on port 3003
        </p>
      </div>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <Card title="Profile Information" padding="30px">
          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '80px', marginBottom: '16px' }}>
              {user.avatar}
            </div>
            {user.status === 'premium' && (
              <Badge variant="warning" size="large">Premium Member</Badge>
            )}
            {!isEditing ? (
              <div style={{ marginTop: '16px' }}>
                <h3 style={{ margin: '8px 0' }}>{user.name}</h3>
                <p style={{ color: '#666', margin: '4px 0' }}>{user.email}</p>
              </div>
            ) : (
              <div style={{ marginTop: '20px', textAlign: 'left' }}>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Email"
                />
              </div>
            )}
          </div>

          {!isEditing ? (
            <Button
              variant="primary"
              size="large"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          ) : (
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button
                variant="success"
                size="large"
                onClick={handleSave}
              >
                Save Changes
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          )}
        </Card>

        <div style={{ marginTop: '20px' }}>
          <Card title="Account Statistics" padding="24px">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff', marginBottom: '8px' }}>
                  {user.memberSince}
                </div>
                <Badge variant="info">Member Since</Badge>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#28a745', marginBottom: '8px' }}>
                  {user.orders}
                </div>
                <Badge variant="success">Total Orders</Badge>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc3545', marginBottom: '8px' }}>
                  ${user.totalSpent}
                </div>
                <Badge variant="danger">Total Spent</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfileApp;
