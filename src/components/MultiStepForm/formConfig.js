export const formConfig = [
    {
        stepId: 1,
        label: 'Profile Details',
        fields: [
            {
                label: 'First Name',
                type: 'text',
                placeholder: 'enter details',
            },
            {
                label: 'Last name',
                type: 'text',
                placeholder: 'enter details'
            }
        ]
    },
    {
        stepId: 2,
        label: 'Contact Details',
        fields: [
            {
                label: 'Email',
                type: 'text',
                placeholder: 'enter details'
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'enter details'
            }
        ]
    },
    {
        stepId: 3,
        label: 'Interest',
        fields: [
            {
                label: 'Fav Movie',
                type: 'text',
                placeholder: 'enter details'
            },
            {
                label: 'Fav Game',
                type: 'text',
                placeholder: 'enter details'
            }
        ]
    },
    {
        stepId: 4,
        label: 'Address',
        fields: [
            {
                label: 'Street no/Building no/Flat no.',
                type: 'text',
                placeholder: 'enter details'
            },
            {
                label: 'Pincode',
                type: 'number',
                placeholder: 'enter details'
            }
        ]
    }
]