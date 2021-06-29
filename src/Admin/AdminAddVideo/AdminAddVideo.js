function AdminAddVideo() {
  return (
    <div>
      <h4> 메인 배너 수정</h4>
      <div className="text-right text-danger ">
        <big className="">*</big> 표시된 영역은 필수 입력 영역 입니다.
      </div>
      <table className="table table-bordered mt-4 ">
        <thead>
          <tr>
            <th scope="col" className="bg-secondary w-25"> <div className=" d-flex justify-content-center"> <big className="text-danger">*</big>동영상 URL
                </div></th>
            <th scope="col">
              <input
                className="form-control w-75"
                type="search"
                defaultValue="https://www.youtube.com/"
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default AdminAddVideo;
