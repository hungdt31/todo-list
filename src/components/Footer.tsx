import ChecklistIcon from '@mui/icons-material/Checklist';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const FooterWrapper = styled('footer')(({ theme }) => ({
  padding: theme.spacing(6, 2),
  marginTop: 'auto',
  backgroundColor: theme.vars?.palette.custom.bgFooter,
  borderTop: `1px solid ${theme.palette.mode === 'light' ? theme.vars?.palette.divider : '#004d4d'}`,
}));

const FooterContainer = styled(Container)({
  maxWidth: 'lg',
});

const FooterContent = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
  justifyContent: 'space-between',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const FooterSection = styled(Box)(() => ({
  flex: 1,
  minWidth: '30%',
  '@media (max-width: 600px)': {
    minWidth: '100%',
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.info.main
      : '#4dd0e1',
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.text.primary
      : '#e0f7fa',
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  borderColor:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.divider
      : '#004d4d',
}));

const SocialIcons = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  marginTop: theme.spacing(2),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.info.main
      : '#4dd0e1',
}));

const ContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const ContactIcon = styled(Box)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.info.main
      : '#4dd0e1',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.vars?.palette.text.primary
      : '#e0f7fa',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          {/* Phần thông tin về ứng dụng */}
          <FooterSection>
            <FooterTitle variant="h6">
              <TaskAltIcon /> TaskMaster
            </FooterTitle>
            <FooterText variant="body2">
              Ứng dụng quản lý công việc hiệu quả, giúp bạn sắp
              xếp và theo dõi các nhiệm vụ một cách dễ dàng. Tăng
              năng suất và không bỏ lỡ bất kỳ deadline nào.
            </FooterText>
            <SocialIcons spacing={1}>
              <SocialIconButton
                aria-label="facebook"
                size="small"
              >
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="twitter" size="small">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton
                aria-label="instagram"
                size="small"
              >
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton
                aria-label="linkedin"
                size="small"
              >
                <LinkedInIcon />
              </SocialIconButton>
            </SocialIcons>
          </FooterSection>

          {/* Phần tính năng */}
          <FooterSection>
            <FooterTitle variant="h6">
              <ChecklistIcon /> Tính năng
            </FooterTitle>
            <Stack spacing={1}>
              <FooterLink href="#">
                Quản lý danh sách công việc
              </FooterLink>
              <FooterLink href="#">
                Phân loại theo dự án
              </FooterLink>
              <FooterLink href="#">Đặt mức độ ưu tiên</FooterLink>
              <FooterLink href="#">Nhắc nhở deadline</FooterLink>
              <FooterLink href="#">Thống kê tiến độ</FooterLink>
            </Stack>
          </FooterSection>

          {/* Phần liên hệ */}
          <FooterSection>
            <FooterTitle variant="h6">
              <ScheduleIcon /> Hỗ trợ
            </FooterTitle>
            <Stack spacing={2}>
              <ContactItem>
                <ContactIcon>
                  <LocationOnIcon fontSize="small" />
                </ContactIcon>
                <FooterText variant="body2">
                  123 Đường Công Nghệ, Quận 1, TP. HCM
                </FooterText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <EmailIcon fontSize="small" />
                </ContactIcon>
                <FooterText variant="body2">
                  support@taskmaster.com
                </FooterText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <PhoneIcon fontSize="small" />
                </ContactIcon>
                <FooterText variant="body2">
                  +84 123 456 789
                </FooterText>
              </ContactItem>
            </Stack>
          </FooterSection>
        </FooterContent>

        <FooterDivider />

        {/* Phần bản quyền */}
        <FooterText variant="body2" align="center">
          © {currentYear} TaskMaster - Ứng dụng quản lý công việc
          hiệu quả. Tất cả các quyền được bảo lưu.
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
