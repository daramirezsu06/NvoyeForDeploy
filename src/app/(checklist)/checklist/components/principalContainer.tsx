'use client';
import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import Question from './questionMultipleChoice';
import questionsUpdated from './arrayChecklist';
import theme from '@/src/app/theme';
import { UseAnswers } from './useAnswers';
import Image from 'next/image';

const QuestionContainer = () => {
  const { answers } = UseAnswers();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progres, setProgres] = useState(0);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questionsUpdated.length - 1 ? prevIndex + 1 : prevIndex
    );
  }, []);
  useEffect(() => {
    setProgres(
      Math.round(((currentQuestionIndex + 1) / questionsUpdated.length) * 100)
    );
  }, [currentQuestionIndex]);

  const prevQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  }, []);

  const getConditionalQuestion = (item) => {
    return item.conditionalQuestions?.find(
      (supquestion) =>
        supquestion.condition?.expectedAnswer ===
        answers[supquestion.condition?.stateCondition || 0]
    );
  };

  const renderQuestion = (item, index) => {
    const conditionalQuestion = getConditionalQuestion(item);

    return (
      <React.Fragment key={index}>
        {index > 0 && <Divider />}
        <Question
          question={item}
          selectConditional={
            conditionalQuestion?.inputType === 'select'
              ? conditionalQuestion
              : null
          }
        />
        {conditionalQuestion?.inputType === 'radio' && (
          <>
            <Divider />
            <Question question={conditionalQuestion} />
          </>
        )}
      </React.Fragment>
    );
  };

  return (
    <>
      <Box sx={{ flex: 1, position: 'relative' }}>
        <Image
          src={questionsUpdated[currentQuestionIndex].image}
          alt="Profile image"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Container
        sx={{
          flex: 1,
          py: 6,
          px: 6,
        }}
      >
        <Box
          sx={{ width: '100%', display: 'flex', alignItems: 'center', my: 4 }}
        >
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progres} />
          </Box>
          <Box>
            <Typography variant="body2">{progres}%</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: 624,
            width: '100%',
            padding: 6,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            borderRadius: 4,
            backgroundColor: theme.custom.paperElevationTwo,
          }}
        >
          {questionsUpdated[currentQuestionIndex].questions.map((item, index) =>
            renderQuestion(item, index)
          )}

          <Stack direction="row" justifyContent="end" spacing={4}>
            <Button
              sx={{ px: 3, py: 1, borderRadius: 1 }}
              variant="outlined"
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft /> Back
            </Button>
            <Button
              variant="contained"
              sx={{ px: 3, py: 1, borderRadius: 1 }}
              onClick={nextQuestion}
              disabled={currentQuestionIndex >= questionsUpdated.length - 1}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default QuestionContainer;

// 'use client';
// import React, { useState } from 'react';
// import { Box, Stack, Button, Divider } from '@mui/material';
// import { ChevronLeft } from '@mui/icons-material';
// import Question from './questionMultipleChoice';
// import questionsUpdated from './arrayChecklist';
// import theme from '@/src/app/theme';
// import { UseAnswers } from './useAnswers';
// import Image from 'next/image';

// const QuestionContainer = () => {
//   const { answers, handleAnswerChange } = UseAnswers();
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const nextQuestion = () => {
//     if (currentQuestionIndex < questionsUpdated.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       alert('You have completed the quiz!');
//     }
//   };

//   const prevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 624,
//         width: '100%',
//         padding: 6,
//         boxShadow: 3,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 4,
//         borderRadius: 4,
//         backgroundColor: theme.custom.paperElevationTwo,
//       }}
//     >

//       {questionsUpdated[currentQuestionIndex].questions.map((item, index) => {
//         const conditionalQuestion = item.conditionalQuestions?.find(
//           (supquestion) =>
//             supquestion.condition?.expectedAnswer ===
//             answers[supquestion.condition?.stateCondition || 0]
//         );

//         if (conditionalQuestion?.inputType === 'select') {
//           const question = (
//             <>
//               {index > 0 && <Divider />}

//               <Question
//                 question={item}
//                 key={index}
//                 selectConditional={conditionalQuestion}
//               />
//             </>
//           );

//           return question;
//         }
//         if (conditionalQuestion?.inputType === 'radio') {
//           const question = (
//             <>
//               <Question
//                 question={item}
//                 key={index}
//                 selectConditional={conditionalQuestion}
//               />
//               <Divider />
//               <Question question={conditionalQuestion} key={index} />
//             </>
//           );

//           return question;
//         }
//         const question = (
//           <>
//             {index > 0 && <Divider />}
//             <Question question={item} key={index} />
//           </>
//         );

//         return question;
//       })}

//       <Stack direction="row" justifyContent="end" spacing={4}>
//         <Button
//           sx={{ px: 3, py: 1, borderRadius: 1 }}
//           variant="outlined"
//           onClick={prevQuestion}
//         >
//           <ChevronLeft /> Back
//         </Button>
//         <Button
//           variant="contained"
//           sx={{ px: 3, py: 1, borderRadius: 1 }}
//           onClick={nextQuestion}
//         >
//           Next
//         </Button>
//       </Stack>
//     </Box>
//   );
// };

// export default QuestionContainer;
