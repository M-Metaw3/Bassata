import { Button } from '@chakra-ui/react';
import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-2">User Data: {userData.customerNameEn}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong>ID Type:</strong> {userData.idTypeId}</p>
          <p><strong>ID Number:</strong> {userData.idNumber}</p>
          <p><strong>ID Date:</strong> {userData.idDate}</p>
          <p><strong>ID Maturity Date:</strong> {userData.idMaturityDate}</p>
          <p><strong>Address (Arabic):</strong> {userData.addressAr}</p>
          <p><strong>Address (English):</strong> {userData.addressEn}</p>
          <p><strong>Basata Status:</strong> {userData.basataStatus}</p>
          <p><strong>Birth Date:</strong> {userData.birthDate}</p>
          <p><strong>City ID:</strong> {userData.cityId}</p>
          <p><strong>Client Type ID:</strong> {userData.clientTypeId}</p>
          <p><strong>Country ID:</strong> {userData.countryId}</p>
        </div>
        <div>
          <p><strong>Customer Name (Arabic):</strong> {userData.customerNameAr}</p>
          <p><strong>Customer Name (English):</strong> {userData.customerNameEn}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>ID Issue City ID:</strong> {userData.iDIssueCityId}</p>
          <p><strong>ID Issue Country ID:</strong> {userData.iDIssueCountryId}</p>
          <p><strong>ID Issue District ID:</strong> {userData.iDIssueDistrictId}</p>
          <p><strong>Mobile:</strong> {userData.mobile}</p>
          <p><strong>Nationality ID:</strong> {userData.nationalityId}</p>
          <p><strong>Occupation:</strong> {userData.occupation}</p>
          <p><strong>Sex ID:</strong> {userData.sexId}</p>
        </div>
        <Button bg={'red.500'} _hover={{bg:'red.600'}} color={'white'}> Complete The Process</Button>
      </div>
    </div>
  );
};

export default UserCard;
