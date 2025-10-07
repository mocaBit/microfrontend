import { useState } from 'react';

function ProfileApp() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '👤',
    memberSince: '2024',
    orders: 15,
    totalSpent: 3499
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
      <h2>User Profile</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        This is a microfrontend running on port 3003
      </p>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '30px',
          marginBottom: '20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '80px', marginBottom: '10px' }}>
              {user.avatar}
            </div>
            {!isEditing ? (
              <>
                <h3 style={{ margin: '10px 0' }}>{user.name}</h3>
                <p style={{ color: '#666', margin: '5px 0' }}>{user.email}</p>
              </>
            ) : (
              <div style={{ marginTop: '20px' }}>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                  placeholder="Email"
                />
              </div>
            )}
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                width: '100%',
                padding: '12px',
                background: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Edit Profile
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleSave}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#95a5a6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div style={{
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h3 style={{ marginTop: 0 }}>Account Statistics</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
            textAlign: 'center'
          }}>
            <div style={{
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
                {user.memberSince}
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Member Since
              </div>
            </div>
            <div style={{
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2ecc71' }}>
                {user.orders}
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Total Orders
              </div>
            </div>
            <div style={{
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>
                ${user.totalSpent}
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Total Spent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileApp;
