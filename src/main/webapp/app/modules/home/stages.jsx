import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import {TimelineOppositeContent} from "@material-ui/lab";
import moment from 'moment';
import {Translate} from "react-jhipster";

const paperstyle={
  padding: '8px 10px',
  textAlign:'left',
}

export default function Stages() {
  return (
    <Timeline position="alternate" className="text-sm">
      <TimelineItem>
        <TimelineOppositeContent  color="text.secondary"  className="flex-none">
          {moment().format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color={'secondary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.logged'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary"  className="flex-none">
          {moment().subtract(30, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color={'primary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.appliedLicence'}/>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary"  className="flex-none">
          {moment().subtract(42, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color={'default'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.appliedPermit'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(63, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'secondary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.assistance'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(71, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'success'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.granted'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(83, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'primary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.renewed'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(97, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'primary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.inspected'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(103, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'secondary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.review'}/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="flex-none">
          {moment().subtract(112, 'minutes').format('h:mm A')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  variant="outlined" color={'secondary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Translate contentKey={'userDashboard.pending'}/></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
