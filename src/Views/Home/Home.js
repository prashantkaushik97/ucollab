import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Divider, TextField, Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';

// Sample data for faculties, courses, and friends
const faculties = [
    { id: 1, name: 'Faculty of Engineering' },
    { id: 2, name: 'Faculty of Medicine' },
    { id: 3, name: 'Faculty of Arts' },
    { id: 4, name: 'Faculty of Science' },
    // Add more faculties as needed
];

const courses = [
    { id: 1, name: 'Computer Science 101', facultyId: 1 },
    { id: 2, name: 'Introduction to Medicine', facultyId: 2 },
    { id: 3, name: 'World History', facultyId: 3 },
    { id: 4, name: 'Physics I', facultyId: 4 },
    // Add more courses as needed
];

const friends = [
    { id: 1, name: 'Alice', status: 'online' },
    { id: 2, name: 'Bob', status: 'in-call' },
    { id: 3, name: 'Charlie', status: 'dnd' },
    { id: 4, name: 'Diana', status: 'offline' },
    // Add more friends as needed
];

const groups = [
    { id: 1, name: 'Study Group' },
    { id: 2, name: 'Project Team' },
    { id: 3, name: 'Music Club' },
    // Add more groups as needed
];

function Home() {
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [chatboxVisible, setChatboxVisible] = useState(false);
    const handleFacultySelect = (faculty) => {
        setSelectedFaculty(faculty);
        setSelectedCourse(null);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
    };

    const handleFriendSelect = (friend) => {
        setSelectedFriend(friend);
        setChatboxVisible(true);
    };

    const minimizeChatbox = () => {
        setChatboxVisible(false);
    };

    const maximizeChatbox = () => {
        setChatboxVisible(true);
    };

    return (<>
        <Navbar />
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#2f3136' }}>
            {/* Faculty Sidebar */}
            <Box sx={{ width: '13%', bgcolor: '#202225', overflow: 'auto', borderRight: '1px solid #40444b' }}>
                <Typography sx={{ p: 2, color: '#b9bbbe', fontWeight: 'medium' }} variant="h6">Faculties</Typography>
                <Divider sx={{ bgcolor: '#40444b' }} />
                <List>
                    {faculties.map((faculty) => (
                        <ListItem button key={faculty.id} onClick={() => handleFacultySelect(faculty)} sx={{ '&:hover': { bgcolor: '#36393f' } }}>
                            <ListItemText primary={faculty.name} primaryTypographyProps={{ style: { color: '#ffffff' } }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* Course Sidebar */}
            <Box sx={{ width: '15%', bgcolor: '#202225', overflow: 'auto', borderRight: '1px solid #40444b' }}>
                <Typography sx={{ p: 2, color: '#b9bbbe', fontWeight: 'medium' }} variant="h6">Courses</Typography>
                <Divider sx={{ bgcolor: '#40444b' }} />
                {selectedFaculty ? (
                    <List>
                        {courses.filter(course => course.facultyId === selectedFaculty.id).map((course) => (
                            <ListItem button key={course.id} onClick={() => handleCourseSelect(course)} sx={{ '&:hover': { bgcolor: '#36393f' } }}>
                                <ListItemText primary={course.name} primaryTypographyProps={{ style: { color: '#ffffff' } }} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', bgcolor: '#292b2f' }}>
                        <Typography sx={{ color: '#b9bbbe' }}>Select a faculty</Typography>
                    </Box>
                )}
            </Box>
            {/* Main Content Section */}
            <Box sx={{ width: '55%', bgcolor: '#36393f', overflow: 'auto', padding: '20px', borderRight: '1px solid #40444b' }}>
                {selectedCourse ? (
                    <>
                        <Typography sx={{ p: 2, color: '#ffffff', fontWeight: 'bold' }} variant="h6">Chatroom for {selectedCourse.name}</Typography>
                        <Divider sx={{ bgcolor: '#40444b' }} />
                        <Box sx={{ p: 3 }}>
                            <Typography sx={{ color: '#dcddde' }}>Welcome to the chatroom for {selectedCourse.name}.</Typography>
                            {/* Chat messages and input field can go here */}
                            <Box sx={{ mt: 2 }}>
                                <TextField fullWidth label="Type a message..." variant="outlined" InputLabelProps={{ style: { color: '#b9bbbe' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#b9bbbe' }, '&:hover fieldset': { borderColor: '#7289da' }, '&.Mui-focused fieldset': { borderColor: '#7289da' } }, input: { color: '#ffffff' } }} />
                                <Button sx={{ mt: 1, bgcolor: '#5865f2', '&:hover': { bgcolor: '#4752c4' } }} variant="contained">Send</Button>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', bgcolor: '#292b2f' }}>
                        <Typography sx={{ color: '#b9bbbe' }}>{selectedFaculty ? 'Select a course' : 'Select a faculty and a course to join the room'}</Typography>
                    </Box>
                )}
            </Box>
            {/* Friends Sidebar */}
            <Box sx={{ width: '14%', bgcolor: '#202225', overflow: 'auto' }}>
                {/* Friends Section */}
                <Typography sx={{ p: 2, color: '#b9bbbe', fontWeight: 'medium' }} variant="h6">Friends</Typography>
                <Divider sx={{ bgcolor: '#40444b' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '50%' }}> {/* Adjust height as necessary */}
                    <List>
                        {friends.map((friend) => (
                            <ListItem key={friend.id} sx={{ '&:hover': { bgcolor: '#36393f', cursor:'pointer' } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {/* Status Dot */}
                                    <Box
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            mr: 1,
                                            bgcolor:
                                                friend.status === 'online' ? '#00FF00' :
                                                    friend.status === 'in-call' ? '#FF0000' :
                                                        friend.status === 'dnd' ? '#FFA500' :
                                                            '#808080', // Offline color
                                        }}
                                    />
                                    <ListItemText onClick={() => { setChatboxVisible(true); setSelectedFriend(friend) }} primary={friend.name} primaryTypographyProps={{ style: { color: '#ffffff' } }} />
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Divider between Friends and Groups */}
                <Divider sx={{ bgcolor: '#40444b' }} />
                {/* Groups Section */}
                <Typography sx={{ p: 2, color: '#b9bbbe', fontWeight: 'medium' }} variant="h6">Groups</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '50%' }}> {/* Adjust height as necessary */}
                    <List>
                        {groups.map((group) => (
                            <ListItem key={group.id} sx={{ '&:hover': { bgcolor: '#36393f' } }}>
                                <ListItemText primary={group.name} primaryTypographyProps={{ style: { color: '#ffffff' } }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
        {/* Chatbox */}
        {chatboxVisible && selectedFriend && (
            <Box
                sx={{
                    position: 'fixed',
                    top: '75%',
                    right: '20%',
                    transform: 'translateY(-50%)',
                    width: '25%',
                    height: '50%',
                    border: '1px solid #40444b',
                    backgroundColor: '#2f3136',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',

                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, backgroundColor:'#202225' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        {/* Status Dot */}
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                marginRight: 1, // Adjusted margin here
                                bgcolor:
                                    selectedFriend.status === 'online' ? '#00FF00' :
                                        selectedFriend.status === 'in-call' ? '#FF0000' :
                                            selectedFriend.status === 'dnd' ? '#FFA500' :
                                                '#808080', // Offline color
                            }}
                        />
                        <Typography variant="h6" sx={{ color: '#fff', padding: '10px', margin: 0 }}> {/* Adjusted margin here */}
                            {selectedFriend.name}
                        </Typography>
                    </Box>
                    <Button onClick={minimizeChatbox} sx={{ color: '#fff' }}>
                        X
                    </Button>

                </Box>
                <Divider sx={{ bgcolor: '#40444b' }} />
                <Box sx={{ padding: '10px', flex: 1, overflowY: 'auto' }}>
                    {/* Messages go here */}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #40444b', padding: '5px' }}>
                    <TextField fullWidth placeholder="Type a message..." InputProps={{ disableUnderline: true, sx: { color: '#fff' } }} />
                    <Button variant="contained" sx={{ ml: '10px' }}>
                        Send
                    </Button>
                </Box>
            </Box>

        )}
    </>
    );
}

export default Home;
