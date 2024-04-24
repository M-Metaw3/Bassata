// // import { Box, Button, Input } from '@chakra-ui/react'
// // import React from 'react'
// // import { NavLink } from 'react-router-dom'






// // function AddTransaction() {
// //   return (
// // <Box alignContent={'center'} h={'100vh'}  >
// // <Box py={'10px'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'}  mx={'auto'} w={'70%'} >
// // {/* <NavLink> */}
// // <Box w={'45%'} >
// // <Input placeholder='Enter Phone Number' h={'6vh'} w={'100%'} />
// // </Box>


// // {/* </NavLink> */}



// // {/* <NavLink> */}

// //   <Button py={8} w={'45%'} colorScheme='red' variant='solid'>
// //   Transaction payment
// //   </Button>
// //   {/* </NavLink> */}
// //   </Box>

// // </Box>
// //   )
// // }

// // export default AddTransaction










// import React, { useState } from 'react';

// const AddTransaction = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [userData, setUserData] = useState(null);

//   const handlePhoneNumberSubmit = (e) => {
//     e.preventDefault();
//     setUserData(getRandomUserData());
//   };

//   const handleOTPSubmit = (e) => {
//     e.preventDefault();
//     if (otp === '15987') {
//       console.log(userData);
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   const getRandomUserData = () => {
//     const users = [
//       { name: 'John Doe', nationalId: '123456789', phoneNumber: '1234567890', country: 'USA', balance: 100 },
//       { name: 'Jane Smith', nationalId: '987654321', phoneNumber: '0987654321', country: 'Canada', balance: 200 },
//       { name: 'Alice Johnson', nationalId: '246813579', phoneNumber: '5551234567', country: 'UK', balance: 150 },
//       { name: 'Bob Williams', nationalId: '135792468', phoneNumber: '7778889990', country: 'Australia', balance: 300 },
//     ];
//     const randomUserIndex = Math.floor(Math.random() * users.length);
//     return users[randomUserIndex];
//   };

//   const handleAddMoney = () => {
//     // Implement add money functionality
//   };

//   const handleWithdraw = () => {
//     // Implement withdraw functionality
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       {!userData ? (
//         <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Search
//           </button>
//         </form>
//       ) : (
//         <form onSubmit={handleOTPSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter OTP (15987)"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Verify OTP
//           </button>
//         </form>
//       )}

//       {userData && (
//         <div className="mt-4">
//           <p>Name: {userData.name}</p>
//           <p>National ID: {userData.nationalId}</p>
//           <p>Phone Number: {userData.phoneNumber}</p>
//           <p>Country: {userData.country}</p>
//           <p>Balance: ${userData.balance}</p>
//           <div className="flex space-x-4">
//             <button onClick={handleAddMoney} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
//               Add Money
//             </button>
//             <button onClick={handleWithdraw} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
//               Withdraw
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddTransaction;








// import React, { useState, useEffect,useLayoutEffect } from 'react';
// import { GetDataProtected } from '../../api/apiFactory';

// const AddTransaction = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [transactionAmount, setTransactionAmount] = useState('');

//   useLayoutEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users'));
//     console.log(storedUsers)
//     if (!storedUsers) {
//       localStorage.setItem('users', JSON.stringify(users));
//     } else {
//       // setUserData(storedUsers[0]);
//     }
//   }, []);

//   const handlePhoneNumberSubmit =async (e) => {
//     e.preventDefault();
// if (phoneNumber.length < 11) return alert('Please enter a valid phone number!');
//     const response = await GetDataProtected('auth/send-otp/' + phoneNumber)

//     console.log(response)


//   if (response.status ==true) {
//     const storedUsers = JSON.parse(localStorage.getItem('users'));
//     const foundUser = storedUsers.find((user) => user?.phoneNumber === phoneNumber);
//     if (foundUser) {
//       setUserData(foundUser);
//     } else {
//       alert('User not found!');
//     }
//     // setError('');
//     // setOtp('55493');
// return;
//   }




//   };

//   const handleOTPSubmit =async (e) => {
//     e.preventDefault();
//     if (otp) {

//       const response = await GetDataProtected(`customer/${phoneNumber}?otp=${otp}`)
//       // setUserData(response.data);
//       console.log(response)
//       if(response?.status==true){
//         setUserData(response.data)
//         setOtp('');
//         setVerificationCode('')
//         setError('');
//       }
      

//     } else {
//       setError('Invalid OTP. Please enter the correct OTP.');
//     }

//       const transactionType = prompt('Enter transaction type (add/withdraw):').toLowerCase();
//       if (transactionType === 'add' || transactionType === 'withdraw') {
//         const amount = prompt(`Enter amount to ${transactionType}:`);
//         if (!isNaN(amount) && amount !== '') {
//           const updatedUserData = { ...userData };
//           if (transactionType === 'add') {
//             updatedUserData.balance += parseInt(amount);
//           } else {
//             updatedUserData.balance -= parseInt(amount);
//           }
//           localStorage.setItem('users', JSON.stringify([updatedUserData]));
//           setUserData(updatedUserData);
//         } else {
//           alert('Please enter a valid amount!');
//         }
//       } else {
//         alert('Invalid transaction type!');
//       }
//     } 
//   };

//   const users = [
//     { name: 'John Doe', nationalId: '123456789', phoneNumber: '1234567890', country: 'USA', balance: 100 },
//     { name: 'Jane Smith', nationalId: '987654321', phoneNumber: '0987654321', country: 'Canada', balance: 200 },
//     { name: 'Alice Johnson', nationalId: '246813579', phoneNumber: '5551234567', country: 'UK', balance: 150 },
//     { name: 'Bob Williams', nationalId: '135792468', phoneNumber: '7778889990', country: 'Australia', balance: 300 },
//   ];

//   return (
//     <div className="max-w-md mx-auto">
//       {!userData ? (
//         <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Search
//           </button>
//         </form>
//       ) : (
//         <form onSubmit={handleOTPSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter OTP (15987)"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Verify OTP
//           </button>
//         </form>
//       )}

//       {userData && (
//         <div className="mt-4">
//           <p>Name: {userData.name}</p>
//           <p>National ID: {userData.nationalId}</p>
//           <p>Phone Number: {userData.phoneNumber}</p>
//           <p>Country: {userData.country}</p>
//           <p>Balance: ${userData.balance}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddTransaction;











// import React, { useState, useEffect } from 'react';
// import { GetDataProtected } from '../../api/apiFactory';

// const AddTransaction = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [transactionType, setTransactionType] = useState('');
//   const [transactionAmount, setTransactionAmount] = useState('');

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users'));
//     console.log(storedUsers);
//     if (!storedUsers) {
//       localStorage.setItem('users', JSON.stringify(users));
//     }
//   }, []);

//   const handlePhoneNumberSubmit = async (e) => {
//     e.preventDefault();
//     if (phoneNumber.length < 11) return alert('Please enter a valid phone number!');
//     const response = await GetDataProtected('auth/send-otp/' + phoneNumber);
//     console.log(response);
//     if (response.status == true) {
//       const storedUsers = JSON.parse(localStorage.getItem('users'));
//       const foundUser = storedUsers.find((user) => user?.phoneNumber === phoneNumber);
//       if (foundUser) {
//         setUserData(foundUser);
//       } else {
//         alert('User not found!');
//       }
//     }
//   };

//   const handleOTPSubmit = async (e) => {
//     e.preventDefault();
//     if (otp) {
//       const response = await GetDataProtected(`customer/${phoneNumber}?otp=${otp}`);
//       console.log(response);
//       if (response?.status == true) {
//         // Display transaction buttons after OTP verification
//         setTransactionType('');
//       }
//     } else {
//       alert('Invalid OTP. Please enter the correct OTP.');
//     }
//   };

//   const handleTransaction = () => {
//     if (transactionType === 'add' || transactionType === 'withdraw') {
//       const amount = prompt(`Enter amount to ${transactionType}:`);
//       if (!isNaN(amount) && amount !== '') {
//         const updatedUserData = { ...userData };
//         if (transactionType === 'add') {
//           updatedUserData.balance += parseInt(amount);
//         } else {
//           updatedUserData.balance -= parseInt(amount);
//         }
//         localStorage.setItem('users', JSON.stringify([updatedUserData]));
//         setUserData(updatedUserData);
//       } else {
//         alert('Please enter a valid amount!');
//       }
//     } else {
//       alert('Invalid transaction type!');
//     }
//   };

//   const users = [
//     { name: 'John Doe', nationalId: '123456789', phoneNumber: '01008541445', country: 'USA', balance: 100 },
//     { name: 'Jane Smith', nationalId: '987654321', phoneNumber: '0987654321', country: 'Canada', balance: 200 },
//     { name: 'Alice Johnson', nationalId: '246813579', phoneNumber: '5551234567', country: 'UK', balance: 150 },
//     { name: 'Bob Williams', nationalId: '135792468', phoneNumber: '7778889990', country: 'Australia', balance: 300 },
//   ];

//   return (
//     <div className="max-w-md mx-auto">
//       {!userData ? (
//         <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Search
//           </button>
//         </form>
//       ) : transactionType ? (
//         <div className="space-y-4">
//           <button onClick={() => setTransactionType('add')} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
//             Add Money
//           </button>
//           <button onClick={() => setTransactionType('withdraw')} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
//             Withdraw
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleOTPSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter OTP (15987)"
//             value={otp}
//             onChange={(e) => setOTP(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Verify OTP
//           </button>
//         </form>
//       )}

//       {userData && (
//         <div className="mt-4">
//           <p>Name: {userData.name}</p>
//           <p>National ID: {userData.nationalId}</p>
//           <p>Phone Number: {userData.phoneNumber}</p>
//           <p>Country: {userData.country}</p>
//           <p>Balance: ${userData.balance}</p>
//           {transactionType && (
//             <form onSubmit={handleTransaction} className="space-y-4">
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={transactionAmount}
//                 onChange={(e) => setTransactionAmount(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <button type="submit" className={`w-full ${transactionType === 'add' ? 'bg-green-500' : 'bg-red-500'} text-white py-2 rounded-md hover:bg-green-600`}>
//                 {transactionType === 'add' ? 'Add Money' : 'Withdraw'}
//               </button>
//             </form>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddTransaction;









import React, { useState, useEffect } from 'react';
import { GetDataProtected } from '../../api/apiFactory';
import { Button } from '@chakra-ui/react';

const AddTransaction = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [l, setl] = useState(false);
  const [l2, setl2] = useState(false);


  const [userData, setUserData] = useState(null);
  const [transactionType, setTransactionType] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    console.log(storedUsers);
    if (!storedUsers) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    try {
      if (phoneNumber.length < 11) return alert('Please enter a valid phone number!');
      setl(true);
      const response = await GetDataProtected('auth/send-otp/' + phoneNumber);
      console.log(response);
      if (response.status == true) {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const foundUser = storedUsers.find((user) => user?.phoneNumber === phoneNumber);
        if (foundUser) {
          setUserData(foundUser);
          setTransactionType(''); // Reset transaction type when user data is set
        } else {
          alert('User not found!');
        }
      }
      
    } catch (error) {
      alert(error?.response?.data?.message);
      
    }finally{
      setl(false);

    }

  };

  const handleOTPSubmit = async (e) => {

    e.preventDefault();
    try {
      
      if (otp) {
        setl2(true);
        const response = await GetDataProtected(`customer/${phoneNumber}?otp=${otp}`);
        console.log(response);
        if (response?.status == true) {
          // Display transaction buttons after OTP verification
          setTransactionType('add');
        }
      } else {
        alert('Invalid OTP. Please enter the correct OTP.');
      }
    } catch (error) {
      alert(error?.response?.data?.message);

      
    }finally{
      setl2(false);
    }
  };

  const handleTransaction = (e) => {
e.preventDefault();
    if (transactionType === 'add' || transactionType === 'withdraw') {
      const amount = prompt(`verify the amount to ${transactionType}:`);
      if (!isNaN(amount) && (amount !== ''&&amount==transactionAmount)) {
        const updatedUserData = { ...userData };
        if (transactionType === 'add') {
          updatedUserData.balance += parseInt(amount);
          window.location.reload();
        } else {
          updatedUserData.balance -= parseInt(amount);
          window.location.reload();
        }
        localStorage.setItem('users', JSON.stringify([updatedUserData]));
        setUserData(updatedUserData);
      } else {
        alert('Please enter a valid amount!');
      }
    } else {
      alert('Invalid transaction type!');
    }
  };

  const users = [
    { name: ' metawea ', nationalId: '123456789', phoneNumber: '01008541445', country: 'EG', balance: 100 },
    { name: 'Taha ', nationalId: '987654321', phoneNumber: '01557307779', country: 'Canada', balance: 200 },
    { name: 'nadim ', nationalId: '246813579', phoneNumber: '01200886141', country: 'UK', balance: 150 },
    { name: 'Badr', nationalId: '135792468', phoneNumber: '01205277723', country: 'Australia', balance: 300 },
  ];

  return (
    <div className="max-w-md mx-auto">
      {!userData ? (
        <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <Button isLoading={l} color={'red.600'} type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Search
          </Button>
        </form>
      ) : transactionType ? (
        <div className="space-y-4">
          <button onClick={() => setTransactionType('add')} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            Add Money
          </button>
          <button onClick={() => setTransactionType('withdraw')} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Withdraw
          </button>
        </div>
      ) : (
        <form onSubmit={handleOTPSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={`Enter OTP sended to ${phoneNumber}`}
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <Button color={'red.600'} isLoading={l2} type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Verify OTP
          </Button>
        </form>
      )}

{userData && transactionType && (
  <div className="mt-4">
    <p>Name: {userData.name}</p>
    <p>National ID: {userData.nationalId}</p>
    <p>Phone Number: {userData.phoneNumber}</p>
    <p>Country: {userData.country}</p>
    <p>Balance: ${userData.balance}</p>
    <form onSubmit={handleTransaction} className="space-y-4">
      <input
        type="number"
        placeholder="Enter amount"
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className={`w-full ${transactionType === 'add' ? 'bg-green-500' : 'bg-red-500'} text-white py-2 rounded-md hover:bg-green-600`}>
        {transactionType === 'add' ? 'Add Money' : 'Withdraw'}
      </button>
    </form>
  </div>
)}

    </div>
  );
};

export default AddTransaction;
