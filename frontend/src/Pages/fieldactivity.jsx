import { useState } from 'react';
import { Title, TextInput, Textarea, Select, NumberInput, Button, Stack, Notification } from '@mantine/core';
import { DateInput } from '@mantine/dates';

export const Fieldactivity = () => {
    const [data, setData] = useState({});
    const [notification, setNotification] = useState(null); // null | 'success' | 'error'

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, status: 'Submitted' }),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setNotification('success');
            setData({});
        } catch (error) {
            console.error('Submit failed', error.message);
            setNotification('error');
        }
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <>
            {notification && (
                <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
                    {notification === 'success' ? (
                        <Notification color="green" title="Success" onClose={() => setNotification(null)}>
                            Report submitted successfully!
                        </Notification>
                    ) : (
                        <Notification color="red" title="Error" onClose={() => setNotification(null)}>
                            Something went wrong. Please try again.
                        </Notification>
                    )}
                </div>
            )}

            <Stack maw={600} mx="auto" mt="xl" gap="md">
                <Title order={2} ta="center">Field Activity Report</Title>

                <Select
                    label="Activity Type"
                    placeholder="Select activity"
                    data={['Health Camp', 'Food Distribution', 'Education Program', 'Awareness Campaign']}
                    value={data.activityType || null}
                    onChange={(value) => setData({ ...data, activityType: value })}
                    required
                />

                <TextInput
                    label="Beneficiary Name"
                    placeholder="Enter beneficiary name"
                    value={data.beneficiaryName || ''}
                    onChange={(e) => setData({ ...data, beneficiaryName: e.target.value })}
                    required
                />

                <TextInput
                    label="Region / Village"
                    placeholder="Enter region or village"
                    value={data.region || ''}
                    onChange={(e) => setData({ ...data, region: e.target.value })}
                    required
                />

                <NumberInput
                    label="Number of Beneficiaries"
                    placeholder="Enter count"
                    min={0}
                    value={data.beneficiaryCount || ''}
                    onChange={(value) => setData({ ...data, beneficiaryCount: value })}
                    required
                />

                <DateInput
                    label="Activity Date"
                    placeholder="Pick date"
                    value={data.date || null}
                    onChange={(value) => setData({ ...data, date: value })}
                    required
                />

                <Textarea
                    label="Issues Observed"
                    placeholder="Enter issues observed during activity"
                    minRows={4}
                    value={data.issuesObserved || ''}
                    onChange={(e) => setData({ ...data, issuesObserved: e.target.value })}
                />

                <Button onClick={handleSubmit}>Submit Report</Button>
            </Stack>
        </>
    );
};
