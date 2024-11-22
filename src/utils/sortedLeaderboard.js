export const sortedData = (result) => {
    const sortedLeaderboard = result?.attempts
        ?.map((attempt) => {
            const correctCount = attempt?.submitted_answers.reduce(
                (count, submitted) => {
                    const correctAnswer = attempt?.correct_answers.find(
                        (correct) => correct.question_id === submitted.question_id
                    )?.answer;

                    return submitted.answer === correctAnswer ? count + 1 : count;
                },
                0
            );

            return {
                user: attempt.user,
                correctCount,
            };
        })
        .sort((a, b) => b.correctCount - a.correctCount);

    return sortedLeaderboard; // Fixed: Corrected the variable name
};
