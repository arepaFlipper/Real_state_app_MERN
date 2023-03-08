import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material';
import { CustomButton } from 'components';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;
  console.log(`🇬🇱%cproperty-details.tsx:15 - data`, 'font-weight:bold; background:#48b700;color:#fff;'); //DELETEME
  console.log(data); // DELETEME
  return (
    <div>PropertyDetails</div>
  )
}

export default PropertyDetails
