import { useState } from "react";

interface PasswordCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerifyPassword: (password: string) => void;
}

const PasswordCheckModal: React.FC<PasswordCheckModalProps> = ({ isOpen, onClose, onVerifyPassword }) => {
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerifyPassword(password);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordCheckModal;
