import Button from '../ui/Button'
import CommentCard from '../ui/CommentCard'
import CommentPagination from '../ui/CommentPagination'
import SectionTitle from '../ui/SectionTitle'
import Textarea from '../ui/Textarea'

const CommentsSection = () => {
  return (
    <>
      <SectionTitle title={'Komentar'} />
      <div className="flex flex-col gap-6 mt-6">
        {/* Input Komentar - Start*/}
        <div className="flex gap-4 border-b border-[#E0E0E0] p-6">
          <div className="size-14 rounded-md overflow-hidden shrink-0">
            <img
              src="/avatar-1.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-3">
            <Textarea placeholder="Apa yang ingin anda tanyakan?" />
            <Button label="Kirim" variant="primary" />
          </div>
        </div>
        {/* Input Komentar - End*/}

        {/* List Komentar - Start*/}
        <div className="flex flex-col gap-4  border-b border-[#E0E0E0] p-6">
          {/* Komentar 1 */}
          <CommentCard
            avatar="/avatar-2.png"
            name="UJANG YUSMEIDI S.P., M.Agr."
            date="28 Mar 2024 11:15"
            content="Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?"
          >
            <CommentCard
              avatar="/avatar-3.png"
              name="DINA RIKHA RIYANAWATI, S.Pd"
              date="28 Mar 2024 11:15"
              content="saya mengunduh sertifikatnya kok juga belumbisa"
            />
          </CommentCard>
        </div>
        {/* List Komentar - End*/}

        {/* Pagination - Start*/}
        <div className="py-5 px-4">
          <CommentPagination />
        </div>
        {/* Pagination - end*/}
      </div>
    </>
  )
}

export default CommentsSection
