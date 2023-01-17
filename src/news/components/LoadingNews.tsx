import { TailSpin } from  'react-loader-spinner'

export const LoadingNews = () => {
  return (
    <div className="flex items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#0038CA"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
