import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 8,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const [noOfInvite, setNoOfInvite] = useState(10);
    const [duration, setDuration] = useState(1);
    const [price, setPrice] = useState(1000);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
            const totalPrice = noOfInvite * duration * 100;
            setPrice(totalPrice);
    }, [noOfInvite, duration])


    // Update price when slider values change
    const handleInviteChange = (event, value: number) => {
        setNoOfInvite(value);
    };

    const handleDurationChange = (event, value: number) => {
        setDuration(value);
    };


    // Chart.js data for the Pie chart
    const pieData = {
        labels: ['Invites', 'Duration' ],
        datasets: [
            {
                label: 'Event Data',
                data: [noOfInvite, duration],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)' ],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)' ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className=''>
            <Button onClick={handleOpen}>Invite</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={style}>
                    <h2 className="text-center font-semibold">Invite to an Event</h2>

                    <div className="mb-4">
                        <p>No of Invites: {noOfInvite}</p>
                        <Slider
                            value={noOfInvite}
                            min={1}
                            max={100}
                            step={1}
                            onChange={handleInviteChange}
                            aria-labelledby="invite-slider"
                        />
                    </div>

                    <div className="mb-4">
                        <p>Duration (in hours): {duration}</p>
                        <Slider
                            value={duration}
                            min={1}
                            max={24}
                            step={1}
                            onChange={handleDurationChange}
                            aria-labelledby="duration-slider"
                        />
                    </div>


                    <div className="mb-4">
                        <p>Total Price:  &#8377; {price}</p>
                    </div>

                    {/* Pie Chart */}
                    <div>
                        <h3 className="text-center">Event Data</h3>
                        <Pie data={pieData} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}
