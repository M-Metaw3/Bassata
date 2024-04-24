import { Box, Button } from '@chakra-ui/react';
import React,{useState} from 'react';

const UserCard = ({ userData }) => {

  const [formData, setFormData] = useState({
    nationalId: '11111111111122',
    email: 'example@example.com',
    mobilePhone: '01066252526',
    nameEn: 'Ahmed',
    nameAr: 'احمد',
    secondNameEn: "mohsen" ,
    secondNameAr: "محسن",
    thirdNameEn: "mohamed" ,
    thirdNameAr: "محمد" ,
    familyNameEn: ' Algebali',
    familyNameAr: 'محمد',
    birthdate: '1990-01-01',
    gender: 'ذكر',
    addressAr: 'عنوان بالعربية',
    addressEn: 'Address in English',
    jobTitle: 'Software Engineer',
    issuedDate: '2022-01-01',
    expirationDate: '2025-01-01',
    isExpired: false,
    governorateAr: 'القاهرة',
    governorateEn: 'Cairo',
    frontImageUrl: "",
    backImageUrl: "",
    faceImageUrl: "",
    contractUrl: "",
    kycFormUrl: "",
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileUrl = reader.result;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: fileUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
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
        
        {
          userData?.basataStatus=="PENDING"&&<>
          <Box>
          <Box color={'red.600'} fontSize={'2rem'}>Complete the process :</Box>
<Box>
           <label class="block" for="frontImage">Front Image</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="frontImage" name="frontImageUrl" onChange={handleFileChange} />
      {formData.frontImageUrl && (
          <img src={formData.frontImageUrl} alt="Front Image" width={'150px'} className="mt-2" />
        )}
      <label class="block" for="backImage">Back Image</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="backImage" name="backImageUrl" onChange={handleFileChange} />
      {formData.backImageUrl && (
          <img src={formData.backImageUrl} width={'150px'}  alt="Back Image" className="mt-2 max-w-xs" />
        )}
      <label class="block" for="faceImage">Face Image</label>
      <input class="w-full width={'150px'}  border rounded-md py-2 px-3" type="file" id="faceImage" name="faceImageUrl" onChange={handleFileChange} />
      {formData.faceImageUrl && (
          <img src={formData.faceImageUrl} width={'150px'}  alt="Face Image" className="mt-2 max-w-xs" />
        )}
      <label class="block" for="contract">Contract</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="contract" name="contractUrl" onChange={handleFileChange} />
  
      <label class="block" for="kycForm">KYC Form</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="kycForm" name="kycFormUrl" onChange={handleFileChange} />

      </Box>
      <Box w={'100%'}>
          <Button w={'full'} bg={'red.500'} _hover={{bg:'red.600'}} color={'white'}> Complete The Process</Button>
          </Box>
      </Box>
          </>
        }
       
      </div>
    </div>
  );
};

export default UserCard;
