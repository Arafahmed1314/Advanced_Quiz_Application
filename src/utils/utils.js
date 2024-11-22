
export const calculateAttemptStats = (result, user) => {
    // Find the attempt for the current user
    const myAttempt = result?.attempts?.find(
        (attempt) => attempt?.user?.id === user?.id
    );

    if (!myAttempt) {
        return { correctCount: 0, wrongCount: 0 }; // Return default counts if no attempt found
    }

    const submitted_answers = myAttempt?.submitted_answers || [];
    const correct_answers = myAttempt?.correct_answers || [];

    // Reduce to count correct and wrong answers
    return submitted_answers.reduce(
        (counts, submitted) => {
            const correctAnswer = correct_answers.find(
                (correct) => correct.question_id === submitted.question_id
            )?.answer;

            if (submitted.answer === correctAnswer) {
                counts.correctCount += 1; // Increment correct count
            } else {
                counts.wrongCount += 1; // Increment wrong count
            }

            return counts;
        },
        { correctCount: 0, wrongCount: 0 } // Initial counts
    );
};
