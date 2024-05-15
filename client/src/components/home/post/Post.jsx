import React from 'react';
import {
  Box,
  Typography,
  styled
} from '@mui/material';

// Styled components...

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;

  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }
`;

// Other components...

const Post = ({ post }) => {
  // Logic to display post data...

  return (
    <Container>
      {/* Display post details */}
    </Container>
  );
};

export default Post;
