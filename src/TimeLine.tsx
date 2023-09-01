import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  LightBulbIcon,
  XCircleIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

const TimeLine = () => {
  return (
    <div>
      <VerticalTimeline lineColor="#FF80D9">
        <VerticalTimelineElement
          className="vertical-timeline-element--register "
          contentStyle={{
            background: "#240F3A",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #240F3A" }}
          date="1 September 2023"
          iconStyle={{
            background: "#FF80D9",
            color: "#240F3A",
            borderBlock: "#240F3A",
          }}
          icon={<LightBulbIcon />}
        >
          <h3 className="vertical-timeline-element-title font-Fuguz-One uppercase ">
            Pembukaan Pendaftaran
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--register"
          contentStyle={{
            background: "#240F3A",
            color: "#fff",
            floodColor: "#240F3A",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #240F3A" }}
          date="17 September 2023"
          iconStyle={{
            background: "#FF80D9",
            color: "#240F3A",
            borderBlock: "#240F3A",
          }}
          icon={<XCircleIcon />}
        >
          <h3 className="vertical-timeline-element-title font-Fuguz-One uppercase">
            Penutupan Pendaftaran
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--register"
          contentStyle={{
            background: "#240F3A",
            color: "#fff",
            floodColor: "#240F3A",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #240F3A" }}
          date="24 September 2023"
          iconStyle={{
            background: "#FF80D9",
            color: "#240F3A",
            borderBlock: "#240F3A",
          }}
          icon={<ClipboardDocumentCheckIcon />}
        >
          <h3 className="vertical-timeline-element-title font-Fuguz-One uppercase">
            Interview
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--register"
          contentStyle={{
            background: "#240F3A",
            color: "#fff",
            floodColor: "#240F3A",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #240F3A" }}
          date="30 September 2023"
          iconStyle={{
            background: "#FF80D9",
            color: "#240F3A",
            borderBlock: "#240F3A",
          }}
          icon={<UserIcon />}
        >
          <h3 className="vertical-timeline-element-title font-Fuguz-One uppercase">
            Diklat Ruang
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-yellow-bright">
            30 September - 1 Oktober 2023
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--register"
          contentStyle={{
            background: "#240F3A",
            color: "#fff",
            floodColor: "#240F3A",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #240F3A" }}
          date="21 Oktober 2023"
          iconStyle={{
            background: "#FF80D9",
            color: "#240F3A",
            borderBlock: "#240F3A",
          }}
          icon={<UserGroupIcon />}
        >
          <h3 className="vertical-timeline-element-title font-Fuguz-One uppercase ">
            Diklat Lapang
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-Open-Sans font-normal text-yellow-bright">
            {" "}
            21 Oktober - 22 Oktober 2023
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CheckBadgeIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
